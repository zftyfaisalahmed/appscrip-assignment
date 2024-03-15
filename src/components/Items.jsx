import React, { useState } from 'react'

const Items = () => {

    const [showFilter, setShowFilter] = useState(false);

    const [showRecom, setShowRecom] = useState(false)

  return (
    <div className='items'>
        <hr className='hr1'/>
            <div className='itemsend'>
                <div className="itemspoint">
                    <div className='count'>
                        <p>3425 ITEMS</p>
                    </div>

                    <div className='showspace'>
                        <ul className='showfilter'>
                            <p onClick={() => setShowFilter(!showFilter)}>
                            {
                                showFilter ? <i className='bi bi-chevron-right'></i> : <i className='bi bi-chevron-left'></i>
                            }
                            {
                                showFilter ? 'Hide Filter' : `Show Filter`
                            }
                            </p>
                        </ul>
                        <p className='showfilter1' onClick={() => setShowFilter(!showFilter)}>
                            {
                                showFilter ? 'Filter' : `Filter`
                            }
                        </p>
                    </div>
                </div>
                <div className="divider">
                    |
                </div>
                <div className='recommended'>
                    <p onClick={() => setShowRecom(!showRecom)}>
                    {
                        showRecom ? 'Recommended' : 'Recommended'
                    }
                    <i className='bi bi-chevron-down'></i>
                    </p>
                </div>
            </div>
        <hr className='hr1'/>

        <div className='maincontent'>
            <div className={`content ${showFilter ? 'show' : 'hide'}`}>
                <p>
                    <i className='bi bi-square'></i> Customizble
                </p>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                        ideal For
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    Occasion
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    work
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    fabric
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    segment
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    suitable for
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    raw material
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

                <div className='content-down'>
                    <p>
                    pattern
                    </p><i className='bi bi-chevron-down'></i>
                </div>
                <div>
                    All
                </div>
                <hr className='hr1'/>

            </div>

            <div className={`content ${showRecom ? 'show' : 'hide'}`}>
                <p>
                    <i className='bi bi-check'></i> Recommended
                </p>
                <section>
                    <p>
                        Newest first
                    </p>
                    <p>
                    popular
                    </p>
                    <p>
                    Price : high to low
                    </p>
                    <p>
                    Price : low to high
                    </p>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Items