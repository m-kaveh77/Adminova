const withLoader = (WrapperComponent, LoaderComponent = null) => {
  const EnhancedComponent = (props) => {
    const { loading, ...rest } = props;

    const Loader = LoaderComponent || (() => <div>Loading ...</div>);

    if (loading) {
      return <Loader />;
    }

    return <WrapperComponent {...rest} />;
  };

  EnhancedComponent.displayName = `WithLoader(${WrapperComponent.name})`;
  return EnhancedComponent;
};

export default withLoader;
