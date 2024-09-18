import { afterEach, describe, expect, it, vi } from "vitest";


import { renderHook, act } from "@testing-library/react-hooks";
import useFetch, { Entry } from "../../hooks/useFetch";

// Mock fetch globally
global.fetch = vi.fn();

describe("useFetch", () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear any previous mocks between tests
  });

  it("should fetch data successfully", async () => {
    const mockResponse = { data: "mockData" };
    // Mock fetch response
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const entry: Entry = { url: "https://api.example.com/data" };

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useFetch(entry));

    // Initially, loading should be true
    expect(result.current.loading).toBe(true);

    // Wait for hook to update
    await waitForNextUpdate();

    // Expect data to be set and loading to be false
    expect(result.current.data).toEqual(mockResponse);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("should handle errors correctly", async () => {
    // Mock fetch to reject
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({ message: "Network error" }),
      status: 500,
    });

    const entry: Entry = { url: "https://api.example.com/data" };

    const { result, waitForNextUpdate } = renderHook(() => useFetch(entry));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    // Expect error to be set and loading to be false
    expect(result.current.error).toEqual({
      status: 500,
      message: "Network error",
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBeUndefined();
  });
});
