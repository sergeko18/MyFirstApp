import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("After creation span with status should be displayed", () => {
        const component = create(<ProfileStatus status="I am the best developer in the world!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="I am the best developer in the world!" />);
        const root = component.root;

        expect(() =>{
            let input = root.findByType("input");
        }).toThrow();
    });

    test("span with status should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="I am the best developer in the world!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("I am the best developer in the world!");
    });

    test("input should be displayed instead of span", () => {
        const component = create(<ProfileStatus status="Serge the best developer in the world!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("Serge the best developer in the world!");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="I am the best developer in the world!" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});