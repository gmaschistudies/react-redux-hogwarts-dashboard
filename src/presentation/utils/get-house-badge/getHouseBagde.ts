import GryffindorBadge from '@/presentation/assets/gryffindor.png';
import HufflepuffBadge from '@/presentation/assets/hufflepuff.png';
import RavenclawBadge from '@/presentation/assets/ravenclaw.png';
import SlytherinBadge from '@/presentation/assets/slytherin.png';

const getHouseBadge = (house: string): string => {
  let badge;

  switch (house) {
    case 'Gryffindor':
      badge = GryffindorBadge;
      break;
    case 'Hufflepuff':
      badge = HufflepuffBadge;
      break;
    case 'Ravenclaw':
      badge = RavenclawBadge;
      break;
    case 'Slytherin':
      badge = SlytherinBadge;
      break;
    default:
      badge = '';
  }
  return badge;
};

export default getHouseBadge;
