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
import AddIcon from '@mui/icons-material/Add';

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
import Profile from '../profile/Profile';
import PostList from './PostList';
import PostModal from './PostModal';
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
    const [open, setOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<'postList' | 'profile'>('postList');

    const handleClick = (tab: 'postList' | 'profile') => {
        setActiveTab(tab);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const handleModalOpen = () => {
        setOpen(true);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
                <Typography variant="h1" gutterBottom>
                    Blog
                </Typography>
                <Typography>
                    Welcome to my little corner! 🌟 I’m so glad you’re here.
                    <br />I hope you have a fabulous day and enjoy your time exploring! 💖✨
                </Typography>
            </div>
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            ></Box>
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
                    <Chip
                        onClick={() => handleClick('postList')}
                        size="medium"
                        label="Main Contents"
                        sx={{
                            backgroundColor: activeTab === 'postList' ? 'background.paper' : 'transparent',
                            border: activeTab === 'postList' ? '' : 'none',
                        }}
                    />
                    <Chip
                        onClick={() => handleClick('profile')}
                        size="medium"
                        label="Profile"
                        sx={{
                            backgroundColor: activeTab === 'profile' ? 'background.paper' : 'transparent',
                            border: activeTab === 'profile' ? '' : 'none',
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
                    <IconButton size="small" aria-label="RSS feed" onClick={handleModalOpen}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Box>
            {activeTab === 'postList' && <PostList />}
            {activeTab === 'profile' && <Profile />}
            <PostModal open={open} handleClose={handleModalClose} />
        </Box>
    );
}
