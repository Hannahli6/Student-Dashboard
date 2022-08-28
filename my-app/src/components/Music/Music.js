import './Music.css';

const Music = () => {
    return ( 
        <div className='music widgets'>
            <iframe className='spotify' title='Spotify playlist' src="https://open.spotify.com/embed/playlist/5VNJY2hce1SgJnYv0XHlor?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    );
}

export default Music;