import RoutedAnchor from './nextjs/RoutedAnchor';

export default props => (
  <RoutedAnchor preserveParams={['theme', 'packages']} {...props} />
);
