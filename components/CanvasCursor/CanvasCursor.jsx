'use client';

import useCanvasCursor from "./useCanvasCursor";

const CanvasCursor = () => {
    useCanvasCursor();
    return <canvas className="pointer-events-none fixed inset-0 -z-50" id="canvas" />;
};
export default CanvasCursor;