import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/pages/login";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

beforeAll(() => {
    global.alert = jest.fn(); // Mock window.alert
});

test("renders login form and submits successfully", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const loginButton = screen.getByRole("button", { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);

    expect(pushMock).toHaveBeenCalledWith("/dashboard");
});

