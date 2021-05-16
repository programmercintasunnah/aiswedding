import React from "react";
import { Col, Container, Row } from "reactstrap";

import CardComp from "./CardComp";
import img1 from "../Img/goni.jpg";
import img2 from "../Img/gudang.jpg";
class ProductCard extends React.Component {
  render() {
    return (
      <>
        <Container className="py-md mt-5">
          {/* <h1 className="text-black font-bold text-center display-3">
            About Product
          </h1> */}
          <Row className="justify-content-center">
            <Col className="text-center" lg="10">
              <p className="lead text-black">
                Areca trees are planted to be used for seeds and stems. Areca
                nut which has a bitter taste, contains alkoloides such as
                arekaina (arecaine) and arekolina (arecoline) which are toxic
                and addictive. Some of the important compounds in betel nuts
                include arecaidine, arecolidine, guvacoline, guracine (guacine).
              </p>
              <p className="lead text-black">
                The main benefit of areca nut is as a medicinal plant. Areca
                nuts are nutritious for curing various diseases, including: To
                treat skin wounds. The method is to mash the young betel nut
                flesh and then attach it to the injured skin.To shrink the
                uterus after childbirth. The trick is to boil young Piang fruit
                then drink the water regularly until the uterus shrinks. To
                treat myopic eyes. The trick, squeeze the fruit then drink the
                water. To treat intestinal worms, especially to treat tapeworms.
                The trick is to boil the young betel nuts until they boil, cool
                the water, then drink the boiled water for the worms. Areca nut
                is also useful as an arousal enhancer for men because it
                contains arekolin.
              </p>

              <p className="lead text-black">
                Chewing betel and betel nuts is a tradition, which has been
                attached to customs or rituals for thousands of years, in South
                Asia to the Pacific. In Vietnam, betel leaf and areca juice are
                also used in wedding rituals as symbols of love. In India, areca
                nut is considered a auspicious herb used in religious rituals,
                and as an individual honor. In Maldives, chewing betel is very
                popular as in Papua New Guinea, Solomon Islands, Taiwan,
                Indonesia, Thailand as well as immigrants in Southeast
                Australia, the United States and England.
              </p>
              <p className="lead text-black">
                The betel nuts that we provide has the best quality in Indonesia
                because it grows on moist peat and clay soils, has large and
                many fruit, even though it is cultivated without fertilizers or
                spraying drugs. It is different from the areca tree which grows
                in dry soil, which generally has a small fruit size and a small
                number. Good quality betel nuts are not moldy, have bright
                color, and the integrity of the seeds is affected by the way
                they are handled when they are harvested.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="py-md mt-5">
          <Row className="justify-content-center">
            <Col className="text-center" lg="4">
              <CardComp
                imgUrl={img1}
                // title="product 1"
                // desc="ini adalah product pertama"
              />
            </Col>
            <Col className="text-center" lg="4">
              <CardComp
                imgUrl={img2}
                // title="product 2"
                // desc="dan ini adalah product kedua"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProductCard;
