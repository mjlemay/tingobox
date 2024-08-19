import React from 'react';
import RuleIcon from '../svg/ruleIcon';
import Block from './block';
import ColumnLayout from './columnLayout';
import FlowGraph from './flowGraph';

interface PlayBookViewProps {
    children?: React.ReactNode;
  }
  
  export default function PlayBookView(props:PlayBookViewProps):JSX.Element {
    const { children } = props;

    return (
        <>
            <ColumnLayout>
                <Block title="Core Rules" size="lg" noMargin={true} stretch={true} icon={<RuleIcon />}>
                    <div
                        className="m-0 p-0 overflow-auto h-full flex-start"
                    >
                        <FlowGraph />
                    </div>
                </Block>
                <Block title="Core Rules" size="lg" noMargin={true} stretch={true} icon={<RuleIcon />}>
                    <div
                        className="m-0 p-0 overflow-auto h-full flex-start"
                    >
                        <FlowGraph />
                    </div>
                </Block>
            </ColumnLayout>
            {children}
        </>
    )
  }
