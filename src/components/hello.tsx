import * as React from "react";
import {Button} from "antd";

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
                    Hello Man {this.props.compiler} and My{" "}
                    {this.props.framework}!
                </h1>
                <hr />
                <Button type="primary">Click Here </Button>
                <hr />
                <h1> My TEster</h1>
            </>
        );
    }
}
