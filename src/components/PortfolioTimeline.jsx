import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Button} from "@mui/material";
import {TimelineOppositeContent} from "@mui/lab";

export default function PortfolioTimeline() {


    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    2022 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="blue">Student @ UofG</Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    2021 - 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="green">Programmer</Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    2022/23
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="green">QMUnion Tech</Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    Aug 2019 - May 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="yellow">IB Student</Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    2019 - 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="orange">IT Assistant</Button>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    2018 - 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>
                    <Button variant="outlined" color="orange">Theatre Tech</Button>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}