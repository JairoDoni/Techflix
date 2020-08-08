import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialDatas, setInitialDatas] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialDatas(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0} style={{ background: '#141414' }}>

      {initialDatas.length === 0 && (
        <div className="loading">
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      {initialDatas.map((category, indice) => {
        if (indice === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialDatas[0].videos[0].title}
                url={initialDatas[0].videos[0].url}
                videoDescription="O que faz uma desenvolvedora front-end? #HipstersPontoTube"
              />
              <br />
              <br />

              <Carousel
                ignoreFirstVideo
                category={initialDatas[0]}
              />

            </div>
          );
        }

        return (

          <Carousel
            key={category.id}
            category={category}

          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
