import React from 'react'
import { useCurrentUser } from '../../../users/providers/UserProvider';
import { Button, CardActions } from '@mui/material';

export default function GuideModBar({ guide, handleDelete, handleReject, handleApprove, handleFeature }) {

    const [isApproved, setIsApproved] = React.useState(guide.isApproved);
    const [isFeatured, setIsFeatured] = React.useState(guide.isFeatured);

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
                color='warning'
                onClick={() => handleReject(guide._id)}
            >
                Reject Guide
            </Button>
            <Button
                variant='contained'
                color='success'
                onClick={() => {
                    handleApprove(guide._id)
                    if (isApproved && isFeatured) {
                        handleFeature(guide._id)
                        setIsFeatured(!isFeatured)
                    }
                    setIsApproved(!isApproved)

                }}
            >
                {isApproved ? "Unapprove Guide" : "Approve Guide"}
            </Button>
            {user?.isAdmin && isApproved &&
                <Button
                    variant='contained'
                    color="info"
                    onClick={() => {
                        handleFeature(guide._id)
                        setIsFeatured(!isFeatured)
                    }}
                >
                    {isFeatured ? "Unfeature Guide" : "Feature Guide"}
                </Button>}
        </CardActions >
    )
}
