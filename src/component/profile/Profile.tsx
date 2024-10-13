import { Container, Box, Typography, Avatar, Paper, Divider } from '@mui/material';
import * as React from 'react';
import minjuImage from '../../images/picture_minju.jpeg';

export default function Profile() {
    return (
        <Container component="main" style={{ padding: '20px', width: '100%' }}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                <Avatar
                    src={minjuImage} // 자신의 사진 파일 경로로 변경
                    alt="Profile Picture"
                    sx={{ width: 120, height: 120, margin: '0 auto' }}
                />
                <Typography variant="h4" component="h1" gutterBottom>
                    Minju Ha
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    SE in LG CNS
                </Typography>

                <Divider style={{ margin: '20px 0' }} />

                <Box textAlign="left" style={{ margin: '20px 0' }}>
                    <Typography variant="h6">About Me</Typography>
                    <Typography variant="body1" color="textSecondary">
                        - MBTI: ESFP or ESTP
                        <br />
                        - 취미: 크로스핏, 헬스, 피아노치기(현재 사내밴드에 속해있음)
                        <br />- 좋아하는 음식: 초밥!!!!
                    </Typography>
                </Box>

                <Divider style={{ margin: '20px 0' }} />

                <Box textAlign="left">
                    <Typography variant="h6">Experience</Typography>
                    <Typography variant="body1" color="textSecondary">
                        LG CNS (2021.05 - 현재)
                        <br />
                        - 차세대 유큐브 프로젝트(응용공통 파트) (2021.05 - 2023.11)
                        <br />- 기상청 방재다면플랫폼 프로젝트 (2024.03 - 현재)
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}
