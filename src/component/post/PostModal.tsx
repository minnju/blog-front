import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
} from '@mui/material';
import { Post } from '@/interface/postInfo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { savePost } from '../../api/postApi';

interface PostModalInterface {
    open: boolean;
    handleClose: () => void;
}

export default function PostModal({ open, handleClose }: PostModalInterface) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Post>({
        defaultValues: {
            isMain: false, // 초기값 설정
            title: '',
            content: '',
        },
    });

    const onSubmit: SubmitHandler<Post> = (data) => {
        //console.log(data);
        const postInfo: Post = data;
        savePost(postInfo);
    };

    return (
        <Dialog
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit(onSubmit),
            }}
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>게시글 등록</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="게시글 제목"
                            fullWidth
                            variant="filled"
                            required
                            {...register('title', { required: 'title is required' })}
                            error={!!errors.title}
                            helperText={errors.title ? errors.title.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            label="게시글 내용"
                            fullWidth
                            multiline
                            rows={6}
                            variant="filled"
                            required
                            {...register('content', { required: 'content is required' })}
                            error={!!errors.content}
                            helperText={errors.content ? errors.content.message : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            label="게시글 설명"
                            fullWidth
                            variant="filled"
                            {...register('description')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="dense"
                            label="이미지 URL"
                            fullWidth
                            variant="filled"
                            {...register('imageUrl')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label="메인 여부" {...register('isMain')} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    취소
                </Button>
                <Button type="submit" color="primary" variant="contained">
                    저장
                </Button>
            </DialogActions>
        </Dialog>
    );
}
