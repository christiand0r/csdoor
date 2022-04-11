import { useMoralis } from 'react-moralis';
import Blockies from 'react-blockies';

const Blockie = props => {
  const { address, currentWallet, ...rest } = props;

  const { account, isAuthenticated } = useMoralis();

  if (!address && (!account || !isAuthenticated)) return null;

  const seed = currentWallet ? account.toLowerCase() : address.toLowerCase();

  return <Blockies {...rest} seed={seed} className='identicon' />;
};

export default Blockie;
