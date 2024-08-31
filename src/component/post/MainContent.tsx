import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import usePostStore from '../../store/usePostStore';
import { useEffect, useState } from 'react';
import { usePostList } from '../../hook/customPostHook';
import { PostReq } from '@/interface/postInfo';
//import { useFetchPosts } from '../../hook/postHook';

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

interface AuthorProps {
    name: string;
}

const Author: React.FC<AuthorProps> = ({ name }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                <AvatarGroup max={3}>
                    <Avatar key={name} alt={name} src={''} sx={{ width: 24, height: 24 }} />
                </AvatarGroup>
                <Typography variant="caption">{name}</Typography>
            </Box>
            <Typography variant="caption">July 14, 2021</Typography>
        </Box>
    );
};

export function Search() {
    return (
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

export default function MainContent() {
    const { mainPost } = usePostStore();
    const [reqInfo, setReqInfo] = useState<PostReq>({ postId: 1 });
    //useFetchPosts(req);
    useEffect(() => {
        console.log('mainPost', mainPost);
    }, [mainPost]);

    usePostList(reqInfo);

    //useFetchPosts(reqInfo);

    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    if (!mainPost || mainPost.length === 0) {
        return null;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h1" gutterBottom>
                    Blog
                </Typography>
                <Typography>Stay in the loop with the latest about our products</Typography>
            </div>
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
                <Search />
                <IconButton size="small" aria-label="RSS feed">
                    <RssFeedRoundedIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        gap: 3,
                        overflow: 'auto',
                    }}
                >
                    <Chip onClick={handleClick} size="medium" label="All categories" />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Company"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Product"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Design"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Engineering"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                        width: { xs: '100%', md: 'fit-content' },
                        overflow: 'auto',
                    }}
                >
                    <Search />
                    <IconButton size="small" aria-label="RSS feed">
                        <RssFeedRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(0)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={mainPost[0].imageUrl}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {mainPost[0].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {mainPost[0].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author name={mainPost[0].authorNm} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(1)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={mainPost[1].imageUrl}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {mainPost[1].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {mainPost[1].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author name={mainPost[1].authorNm} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(2)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={mainPost[2].imageUrl}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {mainPost[2].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {mainPost[2].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author name={mainPost[2].authorNm} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(3)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
                        >
                            <SyledCardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                }}
                            >
                                <div>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {mainPost[3].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {mainPost[3].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author name={mainPost[3].authorNm} />
                        </SyledCard>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(4)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 4 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
                        >
                            <SyledCardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                }}
                            >
                                <div>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {mainPost[4].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {mainPost[4].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author name={mainPost[4].authorNm} />
                        </SyledCard>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(5)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={mainPost[5].imageUrl}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {mainPost[5].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {mainPost[5].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author name={mainPost[5].authorNm} />
                    </SyledCard>
                </Grid>
            </Grid>
        </Box>
    );
}
