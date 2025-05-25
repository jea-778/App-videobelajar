import { useSelector } from "react-redux";

export default function LoadingOverlay() {
    const isLoading = useSelector((state) => state.loading.isLoading);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
