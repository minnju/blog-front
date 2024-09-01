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
import Profile from '../profile/Profile';

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

export default function PostList() {
    const { mainPost } = usePostStore();
    const [reqInfo, setReqInfo] = useState<PostReq>({ postId: 1 });

    //useFetchPosts(req);
    useEffect(() => {
        console.log('mainPost', mainPost);
    }, [mainPost]);

    usePostList(reqInfo);
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
        <Grid container spacing={2} columns={12}>
            {Array.isArray(mainPost)
                ? mainPost.map((post, index) => (
                      <Grid key={index} size={{ xs: 12, md: 6 }}>
                          <SyledCard
                              variant="outlined"
                              onFocus={() => handleFocus(0)}
                              onBlur={handleBlur}
                              tabIndex={index}
                              className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                          >
                              {post.imageUrl && (
                                  <CardMedia
                                      component="img"
                                      alt="green iguana"
                                      image={post.imageUrl}
                                      aspect-ratio="16 / 9"
                                      sx={{
                                          borderBottom: '1px solid',
                                          borderColor: 'divider',
                                      }}
                                  />
                              )}
                              <SyledCardContent>
                                  <Typography gutterBottom variant="h6" component="div">
                                      {post.title}
                                  </Typography>
                                  <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                      {post.description}
                                  </StyledTypography>
                              </SyledCardContent>
                              <Author name={post.authorNm} />
                          </SyledCard>
                      </Grid>
                  ))
                : null}
        </Grid>
    );
}
