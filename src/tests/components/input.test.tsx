import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Input component", () => {
    // it("match snapshot",()=>{
    it("renders without crashing", () => {
        const { container } = render(<input placeholder="test" id="test-input" onChange={vi.fn()} />);
        expect(container).toMatchSnapshot()
    });
    it("should render an input with the provided id and placeholder", () => {
        render(
            <input id="username" placeholder="Enter username" value="" onChange={vi.fn()} />
        )
        const input = screen.getByPlaceholderText("Enter username");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id", "username");
        // expect(input).toHaveAttribute("type","text");  
    });
    // })
})