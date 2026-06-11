import { screen,render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
// import Input from "../../components/Input";
import LoginPage from "../../components/LoginPage";
import { configureStore } from "@reduxjs/toolkit/react";
import userEvent from '@testing-library/user-event';
// Mock react-router-dom's useNavigate
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

// Mock the login mutation
const mockLoginMutation = vi.fn();
        vi.mock("../../api-service/auth/login.api", () => ({
        useLoginMutation: () => [
            () => ({
            unwrap: () => mockLoginMutation(),
            }),
            { isLoading: false },
        ],
        }));


describe("login", async ()=>{
        it("renders without crashing", async () => {
            const {container} = render(<LoginPage />);
            expect(container).toMatchSnapshot()
            const username:HTMLElement = screen.getByTestId("username-field")
            const password:HTMLElement= screen.getByTestId("password-field")
            const user = userEvent.setup();
            await user.type(username, 'test@example.com');
            await user.type(password, "string");
            const button:HTMLElement = screen.getByTestId("submit-button")
            await user.click(button)
            await waitFor{()=>{
                expect(mockLoginMutation).toHaveBeenCalled();
                // expect(mockNavigation).
            }}
        
        });



})