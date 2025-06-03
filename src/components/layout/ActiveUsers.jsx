import {Box, Text, Flex, Grid} from "@chakra-ui/react";
import { BarSegment, useChart } from "@chakra-ui/charts";
import { AbsoluteCenter, For, HStack, ProgressCircle } from "@chakra-ui/react"
import { Chart } from "@chakra-ui/charts"
import { Pie, PieChart } from "recharts"
import { Cell, LabelList, Tooltip } from "recharts"


const ActiveUsers = () => {
    const chart = useChart({
        sort: { by: "value", direction: "desc" },
        data: [
            { name: "Students", value: 30000, color: "#FFD85F" },
            { name: "Staff", value: 18000, color: "#303030" },
            { name: "Others", value: 10000, color: "#898989" },
        ],
    });

    return (
        <Box
            width="344px"
            height="779px"
            position="absolute"
            // top="309px"
            // right="31px"
            borderRadius="50px"
            bg="rgba(248, 248, 239, 0.6)"
            p="30px"
            display={{base: "block", sm: "block", md: "block" , lg: "block"}}
            top={{base: "309px", sm: "1100px", md: "1109px", lg: "309px"}}
            right={{base: "31px", sm: "100px", md: "31px", lg: "11px"}}
            css={{
                '@media (min-width: 1440px)': {
                    width: "364px",
                    right: '31px'
                },
                '@media (min-width: 1366px)': {
                    width: '324px',
                },
            }}
        >
            <Flex justify="space-between" mb="40px">
                <Text
                    fontSize="20px"
                    fontWeight="semibold"
                    fontFamily="Mulish"
                    color="black"
                >
                    Active Users
                </Text>
                <Text
                    fontSize="20px"
                    fontWeight="semibold"
                    fontFamily="Mulish"
                    color="black"
                >
                    67%
                </Text>
            </Flex>

            <Box height="400px">
                <BarSegment.Root chart={chart}>
                    <BarSegment.Content>
                        <BarSegment.Value fontSize="12px" fontFamily="Mulish" fontWeight="medium" color="black"/>
                        <BarSegment.Bar/>
                        {/*<BarSegment.Label color="black"/>*/}
                    </BarSegment.Content>
                    <BarSegment.Legend fontSize="12px" fontFamily="Mulish" fontWeight="regular" color="black" gap="5" textStyle="xs" showPercent />
                </BarSegment.Root>
            </Box>

            <Box position="absolute" top="210px" botton="0px" right="0px" left="0px" margin="auto">
                <Chart.Root boxSize="320px" mx="auto" chart={chart}>
                    <PieChart>
                        <Tooltip
                            cursor={false}
                            animationDuration={100}
                            content={<Chart.Tooltip hideLabel />}
                        />
                        <Pie
                            isAnimationActive={false}
                            data={chart.data}
                            dataKey={chart.key("value")}
                        >
                            <LabelList position="inside" fill="white" stroke="none"
                                       style={{
                                           fontSize: '14px',
                                           fontWeight: 'medium',
                                           fontFamily: 'Mulish',
                                       }}
                            />
                            {chart.data.map((item) => (
                                <Cell key={item.name} fill={chart.color(item.color)} />
                            ))}
                        </Pie>
                    </PieChart>
                </Chart.Root>
            </Box>

            <Text w="auto"
                  h="auto"
                  color="black"
                  position="absolute"
                  top="550px"
                  fontSize="16px"
                  fontWeight="semibold"
                  fontFamily="Mulish"
            >
                By Authentication Method
            </Text>

            <Grid
                // bg="red"
                templateColumns="repeat(3, 1fr)"
                gap={6}
                w="320px"
                h="100px"
                // px="30px"
                placeItems="center"
                position="absolute"
                top="450px"
                bottom="0"
                right="0"
                left="0"
                margin="auto"
            >
                <Flex direction="column" alignItems="center" justifyContent="center" w="60px" h="auto">
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        Microsoft
                    </Text>
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        270
                    </Text>

                    <Box position="absolute" top="100px">
                        <ProgressCircle.Root size={"xl"} value={75}>
                            <ProgressCircle.Circle css={{
                                "--thickness": "10px",
                                // "--track-stroke-dasharray": "3, 3"
                            }}>
                                <ProgressCircle.Track
                                    stroke="black"
                                    strokeDasharray="1, 8"
                                />
                                <ProgressCircle.Range stroke="#FFD85F" strokeLinecap="round"/>
                            </ProgressCircle.Circle>
                            <AbsoluteCenter>
                                <ProgressCircle.ValueText color="black" fontSize="14px" fontWeight="semibold" fontFamily="Mulish"/>
                            </AbsoluteCenter>
                        </ProgressCircle.Root>
                    </Box>
                </Flex>
                <Flex direction="column" alignItems="center" justifyContent="center" w="60px" h="auto">
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        Internal
                    </Text>
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        135
                    </Text>
                    <Box position="absolute" top="100px">
                        <ProgressCircle.Root size={"xl"} value={50}>
                            <ProgressCircle.Circle css={{
                                "--thickness": "10px",
                                // "--track-stroke-dasharray": "3, 3"
                            }}>
                                <ProgressCircle.Track
                                    stroke="black"
                                    strokeDasharray="1, 8"
                                />
                                <ProgressCircle.Range stroke="#FFD85F" strokeLinecap="round"/>
                            </ProgressCircle.Circle>
                            <AbsoluteCenter>
                                <ProgressCircle.ValueText color="black" fontSize="14px" fontWeight="semibold" fontFamily="Mulish"/>
                            </AbsoluteCenter>
                        </ProgressCircle.Root>
                    </Box>
                </Flex>
                <Flex direction="column" alignItems="center" justifyContent="center" w="60px" h="auto">
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        SMAL
                    </Text>
                    <Text
                        fontSize="14px"
                        fontWeight="medium"
                        fontFamily="Mulish"
                        color="black"
                    >
                        130
                    </Text>
                    <Box position="absolute" top="100px">
                        <ProgressCircle.Root size={"xl"} value={41}>
                            <ProgressCircle.Circle css={{
                                "--thickness": "10px",
                                // "--track-stroke-dasharray": "3, 3"
                            }}>
                                <ProgressCircle.Track
                                    stroke="black"
                                    strokeDasharray="1, 8"
                                />
                                <ProgressCircle.Range stroke="#FFD85F" strokeLinecap="round"/>
                            </ProgressCircle.Circle>
                            <AbsoluteCenter>
                                <ProgressCircle.ValueText color="black" fontSize="14px" fontWeight="semibold" fontFamily="Mulish"/>
                            </AbsoluteCenter>
                        </ProgressCircle.Root>
                    </Box>
                </Flex>
            </Grid>
        </Box>
    );
};

export default ActiveUsers;