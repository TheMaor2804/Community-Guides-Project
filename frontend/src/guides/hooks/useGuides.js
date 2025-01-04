import { useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCurrentUser } from "../../users/providers/UserProvider";
import useAxios from "../../hooks/useAxios";
import { approveGuide, createGuide, deleteGuide, downvoteGuide, featureGuide, getGuide, getGuides, updateGuide, upvoteGuide } from "../services/guidesApiService";
import ROUTES from "../../routes/routesModel";

export default function useGuides() {
    const [guides, setGuides] = useState([]);
    const [guide, setGuide] = useState({});
    const [guidesIsLoading, setIsLoading] = useState(true);
    const [guidesError, setError] = useState();
    const [filteredGuides, setFilteredGuides] = useState();
    const [query, setQuery] = useState('');
    const [searchParams] = useSearchParams();

    const { user } = useCurrentUser();

    const navigate = useNavigate();

    useAxios();

    const getAllGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const guides = await getGuides();
            setGuides(guides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getAllApprovedGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const guides = await getGuides();
            const approvedGuides = guides.filter(guide => guide.isApproved);
            setGuides(approvedGuides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getAllUnapprovedGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const guides = await getGuides();
            const unapprovedGuides = guides.filter(guide => !guide.isApproved);
            setGuides(unapprovedGuides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getGuideById = useCallback(async (guideId) => {
        setIsLoading(true);
        try {
            const guide = await getGuide(guideId);
            setGuide(guide);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getMyGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const myGuides = await getMyGuides();
            setGuides(myGuides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getFavGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const favGuides = await getFavGuides();
            setGuides(favGuides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getUpvotedGuides = useCallback(async () => {
        setIsLoading(true);
        try {
            const guides = await getGuides();
            const upvotedGuides = guides.filter(guide => guide.upvotes.includes(user._id));
            setGuides(upvotedGuides);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, [user]);

    const handleCreateGuide = useCallback(async (guide) => {
        setIsLoading(true);
        try {
            const data = await createGuide(guide);
            navigate(ROUTES.GUIDE + "/" + data._id, { replace: true });
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const handleUpdateGuide = useCallback(async (guideId, guide) => {
        setIsLoading(true);
        try {
            const data = await updateGuide(guideId, guide);
            return data;
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const handleUpvoteGuide = useCallback(async (guideId) => {
        try {
            const guide = await upvoteGuide(guideId);
            return guide;
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleDownvoteGuide = useCallback(async (guideId) => {
        try {
            const guide = await downvoteGuide(guideId);
            return guide;
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleDeleteGuide = useCallback(async (guideId) => {
        try {
            const guide = await deleteGuide(guideId);
            return guide;
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleApproveGuide = useCallback(async (guideId) => {
        try {
            const guide = await approveGuide(guideId);
            return guide;
        } catch (error) {
            setError(error);
        }
    }, []);

    const handleFeatureGuide = useCallback(async (guideId) => {
        try {
            const guide = await featureGuide(guideId);
            return guide;
        } catch (error) {
            setError(error);
        }
    }, []);

    return {
        guides,
        guide,
        guidesIsLoading,
        guidesError,
        filteredGuides,
        query,
        searchParams,
        getAllGuides,
        getAllApprovedGuides,
        getAllUnapprovedGuides,
        getGuideById,
        getMyGuides,
        getUpvotedGuides,
        handleCreateGuide,
        handleUpdateGuide,
        handleUpvoteGuide,
        handleDownvoteGuide,
        handleDeleteGuide,
        handleApproveGuide,
        handleFeatureGuide,
        setFilteredGuides,
        setQuery
    }

}