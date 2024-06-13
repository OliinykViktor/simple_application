import { renderHook, act } from "@testing-library/react-hooks";
import { useRouter } from "@tanstack/react-router";

import useLogin from "./useLogin";
import authService from "../services/AuthService";

jest.mock("@tanstack/react-router");

describe("useLogin", () => {
  beforeEach(() => {
    const navigateMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ navigate: navigateMock });
  });

  it("handles login successfully", async () => {
    const loginSpy = jest.spyOn(authService, "login").mockResolvedValue(true);
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setUsername("user");
      result.current.setPassword("wrongPassword");
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent);
    });

    expect(loginSpy).toHaveBeenCalledWith("user", "wrongPassword");

    loginSpy.mockRestore();
  });

  it("handles login failure", async () => {
    const loginSpy = jest.spyOn(authService, "login").mockResolvedValue(false);
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setUsername("user");
      result.current.setPassword("wrongPassword");
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent);
    });

    expect(loginSpy).toHaveBeenCalledWith("user", "wrongPassword");

    loginSpy.mockRestore();
  });
});
