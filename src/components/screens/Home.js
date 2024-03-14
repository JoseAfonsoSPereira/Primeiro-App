import { ScrollView, View} from 'react-native';
import Header from '../Header';
import Stories from '../../components/Stories';
import Posts from '../../components/Posts';
import Alan from "../../assets/Alan.jpg";
import PostImagem from "../../assets/postAlan.jpg";
import PostImagem2 from "../../assets/postAlan2.jpg";
import PostImagem3 from "../../assets/postAlan3.jpg";


export default function Home() {
    return (

        <View
            style={{
                flex: 1,
                marginVertical: 32,
                MarginHorizontal: 16,
            }}
        >
            
            <ScrollView>
            <Header />
            <Stories />

            <Posts
            profileImage={Alan}
            postImage={PostImagem}
            profileName={"Alanzoka"}
            description={"lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invid id ut labore et dolore magna aliqu sapiente consequ ut labore et dolore magna aliqu sap   "}
            />
                <Posts
            profileImage={Alan}
            postImage={PostImagem2}
            profileName={"Alanzoka"}
            description={" das dasdae hgdyv jutkgb no ency eknfao lorem ipsum dolor sit amet, consectetur adip nonum soc tempor invid id ut labore et dolore magna aliqu sapiente consequ ut labore et dolore magna aliqu sap   "}
            />
                <Posts
            profileImage={Alan}
            postImage={PostImagem3}
            profileName={"Alanzoka"}
            description={" feabhbs fenaifunfusdna fm emfiaushfe mgo oefi  fmnenaifnao e feaoenfaslorem ipsum dolor sit amet, consectetur adip nonum soc tempor invid id ut labore et dolore magna aliqu sapiente consequ ut labore et dolore magna aliqu sap   "}
            />
            </ScrollView>
      

            
        </View>
    )
}