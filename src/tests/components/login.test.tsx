import { screen, render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
// import Input from "../../components/Input";
import LoginPage from "../../components/LoginPage";
import { configureStore } from "@reduxjs/toolkit/react";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
// Mock react-router-dom's useNavigate

// import { } from "../../api-service/auth/login.api.ts";

beforeEach(() => {
    vi.clearAllMocks();
});
const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

// Mock the store
const mockStore = configureStore({
    reducer: {
        employee: (state = { employees: [] }) => state,
        department: (state = { departments: [] }) => state,
        employeeApi: (state = {}) => state,
    },
});

const mockLogin = vi.fn();
vi.mock("../../api-service/auth/login.api", () => ({
  useLoginMutation: () => [
    mockLogin,
    { isLoading: false },
  ],
}));

describe("login", async () => {
    it("renders without crashing", async () => {
        const { container } = render(<Provider store={mockStore}><LoginPage /></Provider>);
        expect(container).toMatchSnapshot()
    })
    it("sends api", async () => {
        const { container } = render(<Provider store={mockStore}><LoginPage /></Provider>);
        mockLogin.mockResolvedValue({ data: { access_token: "fake", } });
        const username: HTMLElement = screen.getByTestId("username-field")
        const password: HTMLElement = screen.getByTestId("password-field")
        const user = userEvent.setup();
        await user.type(username, 'user@example.com');
        await user.type(password, "string");
        const button: HTMLElement = screen.getByTestId("submit-button")
        await user.click(button);

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/employee");
        });
    })




});

