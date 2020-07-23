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
})