import { Helmet } from "react-helmet";

const MetaDeclaration = ({ title }) => {
   return (
      <Helmet>
         <title>{title}</title>
      </Helmet>
   );
}


export default MetaDeclaration;