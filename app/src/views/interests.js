import CustomTooltip from "@/components/tooltip";
import { theme } from "@/configs/theme";
import { BuildCircle, Code, Dns, Storage } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Grid, Grow, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const data = [
    {
        id: 1,
        name: "Backend",
        icon: <BuildCircle />,
        data: [
            {
                name: "Node.js",
                icon: <Code />,
            },
            {
                name: "Go Programming Language asdsad ada sdasd ad a",
                icon: <Dns />,
            },
            {
                name: "Redis",
                icon: <Storage />,
            },
            {
                name: "Postgres",
                icon: <Storage />,
            },
        ]
    },
    {
        id: 2,
        name: "Frontend",
        icon: <Code />,
        data: [
            {
                name: "React.js",
                icon: <Code />,
            },
            {
                name: "Vue.js",
                icon: <Code />,
            },
        ]
    }
]

const Interests = () => {
    const router = useRouter();

    const [checked, setChecked] = useState(true);

    useEffect(() => {
        setChecked(true);
    }, []);

    const calculateGrowTimeout = (index) => {
        let maxms = 600;
        return maxms / 1 + Math.pow(Math.E, index)
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider textAlign="left">
                        <Typography variant="h4">
                            Choose Your Interests
                        </Typography>
                    </Divider>
                </Grid>

                {data.map((item, i) => (
                    <Fragment key={i}>
                        <Grid item xs={12} sx={{ mt: '1rem' }}>
                            <Typography variant="body3" sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                {item.icon}

                                {item.name}
                            </Typography>
                        </Grid>

                        {item.data.map((item, index) => (
                            <Grow
                                in={checked}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(checked ? { timeout: calculateGrowTimeout(index) } : {})}
                                key={index}
                            >
                                <Grid item xs={12} sm={6} md={4}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <CustomTooltip title={item.name} placement="top">
                                        <Card
                                            sx={{
                                                width: "100%",
                                                cursor: "pointer",
                                                '&:hover': {
                                                    borderColor: theme.palette.primary.main,
                                                    transform: "scale(1.025)",
                                                },
                                            }}
                                            variant="bordered"
                                            onClick={() => router.push(`/interests/${index + 1}`)}
                                        >
                                            <CardContent>
                                                <Typography
                                                    sx={{
                                                        gap: "1rem",
                                                        alignItems: "center",
                                                        width: "100%",
                                                        display: "flex",
                                                    }}
                                                    variant="body2"
                                                >
                                                    {item.icon}

                                                    <Typography
                                                        sx={{
                                                            textOverflow: "ellipsis",
                                                            overflow: "hidden",
                                                            whiteSpace: "nowrap",
                                                            webkitLineClamp: 1,
                                                            width: "100%",
                                                            WebkitBoxOrient: "vertical",
                                                        }}
                                                        variant="body2"
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </CustomTooltip>
                                </Grid>
                            </Grow>
                        ))}
                    </Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default Interests;
