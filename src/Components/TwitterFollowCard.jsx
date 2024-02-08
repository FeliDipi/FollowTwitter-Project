import { useState } from "react";

export const TwitterFollowCard = ({children, userName, initialIsFollowing}) =>
{
    const [isFollowing, setFollowing] = useState(initialIsFollowing);

    const HandleClick = () =>
    {
        setFollowing(!isFollowing);
    }

    const imgSrc = `https://unavatar.io/${userName}`;

    const followStyle = isFollowing ? 
        "tw-followCard-button is-following" : 
        "tw-followCard-button";

    const followText = isFollowing ? 
        "Siguiendo" : 
        "Seguir";

    return (
        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imgSrc} alt="Nicolás Felipe Dipierro" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
  
            <aside>
                <button onClick={HandleClick} className={followStyle}>
                    {followText}
                </button>
            </aside>
  
      </article>
    )
}