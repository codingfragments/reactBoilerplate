import * as React from "react";
import { Button } from "antd";
import { StaticContext } from "../services/basic";

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <>
                <h1>
                    Hello Man {this.props.compiler} and My
                    {this.props.framework}!
                </h1>
                <hr />
                <Button type="default" size="small">
                    Click Here
                </Button>
                <hr />
                <h1> My TEster</h1>
            </>
        );
    }
}
