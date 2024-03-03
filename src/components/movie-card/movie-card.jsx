import React from 'react';

const MovieCard = () => {
    return (
        <div className="container mx-auto mt-10 py-8">
            <div className="flex justify-between">
                <div className="movie-card mb-8 w-1/2 flex">
                    <div className="flex items-center mr-8 space-x-4 bg-white rounded-lg shadow-md p-5">
                        <div className="img-area w-1/4">
                            <img src="https://cdn1.ntv.com.tr/gorsel/VDk971sn5U2fHFRKi5siDg.jpg?width=960&mode=crop&scale=both" alt="Film Poster" className="w-40 ml-2 h-auto rounded-lg" />
                        </div>
                        <div className="flex w-1/2 flex-col">
                            <div className="contents">
                                <h2 className="text-lg font-semibold">Dune: Çöl Gezegeni Bölüm İki</h2>
                                <p className="text-gray-500">IMDB: 7.5/10</p>
                                <p>Paul Atreides (Timothée Chalamet), Baharat adlı bir metayı koruyan dev solucanların olduğu çöl gezegeninde göçebelerin Mesihi olur. Baharat insanları gezginlere, mistiklere ve hatta delilere dönüştürebilir. Peki evrenlerinin yeni hükümdarı olmak için Paul hangi bedeli ödeyecek?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-card mb-8 w-1/2 flex">
                    <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-5">
                        <div className="img-area w-1/4">
                            <img src="https://cdn1.ntv.com.tr/gorsel/VDk971sn5U2fHFRKi5siDg.jpg?width=960&mode=crop&scale=both" alt="Film Poster" className="w-40 ml-2 h-auto rounded-lg" />
                        </div>
                        <div className="flex w-1/2 flex-col">
                            <div className="contents">
                                <h2 className="text-lg font-semibold">Dune: Çöl Gezegeni Bölüm İki</h2>
                                <p className="text-gray-500">IMDB: 7.5/10</p>
                                <p>Paul Atreides (Timothée Chalamet), Baharat adlı bir metayı koruyan dev solucanların olduğu çöl gezegeninde göçebelerin Mesihi olur. Baharat insanları gezginlere, mistiklere ve hatta delilere dönüştürebilir. Peki evrenlerinin yeni hükümdarı olmak için Paul hangi bedeli ödeyecek?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
