import { P } from './styles';

export type Props = {
  children : string;
  tipo?: 'principal'  | 'secundario'
}

const Pragrafo =({ children, tipo = 'principal'}: Props) => <P tipo= {tipo}>{children}</P>

export default Pragrafo
