import React from "react";
import type {ReactWrapper} from "enzyme"
import {mount} from "enzyme";
import Root from "./Root";

let component: ReactWrapper | null = null;

describe("Root", () => {
    it("renders the application", () => {
        component = mount(<Root/>)
        expect(component.text()).toContain("Learn Next.js")
    })

    xit("navigates between pages", () => {
        component = mount(<Root/>)

        /**
         * Note that this throws an error: "No router instance found",
         * this implies routing in Next.js is not easily unit tested
         */
        component.find(".t-first-post-link").hostNodes().simulate("click")
    });
})