import React from 'react'
import { useCurrentUser } from '../../../users/providers/UserProvider';
import { Button, CardActions } from '@mui/material';

export default function GuideModBar({ guide, handleDelete, handleApprove, handleFeature }) {

    const { user } = useCurrentUser();

    if (!user || (!user.isMod && !user.isAdmin)) {
        return null;
    }


    return (
        <CardActions>
            <Button
                variant='contained'
                color='error'
                onClick={handleDelete}
            >
                Delete Guide
            </Button>
            <Button
                variant='contained'
                color='success'
                onClick={() => {
                    handleApprove(guide._id)
                }}
            >
                {guide.isApproved ? "Unapprove Guide" : "Approve Guide"}
            </Button>
            {user?.isAdmin && guide.isApproved &&
                <Button
                    variant='contained'
                    color="info"
                    onClick={() => {
                        handleFeature(guide._id)
                    }}
                >
                    {guide.isFeatured ? "Unfeature Guide" : "Feature Guide"}
                </Button>}
        </CardActions >
    )
}
