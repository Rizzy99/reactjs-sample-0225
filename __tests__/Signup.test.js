import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../src/pages/signup";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

test("renders signup form and submits successfully", () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<Signup />);

    const nameInput = screen.getByPlaceholderText("Enter Name");
    const emailInput = screen.getByPlaceholderText("Email Address");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const signupButton = screen.getByRole("button", { name: /sign up/i });


    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "securepass123" } });

    fireEvent.click(signupButton);

    expect(pushMock).toHaveBeenCalledWith("/login");
});

