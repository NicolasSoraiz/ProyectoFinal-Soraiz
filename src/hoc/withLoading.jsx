export const withLoading = (Component) => {
    function ComponentWithLoading({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <p className="text-center text-white mt-10">
                    Cargando productos...
                </p>
            );
        }

        return <Component {...props} />;
    }

    return ComponentWithLoading;
};
