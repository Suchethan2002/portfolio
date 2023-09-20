export default function Portfolio()
{
    return(
        <div className="Main-title">
            <div className="Main-title-header">
                <h2>
                MY
                <span> PORTFOLIO</span>
                <span className="Span-Style"></span>
               </h2> 
            </div>
            <div className="Portfolios">
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Movie Recommendation System</h3>
                        <p>Recommendation based on user Watch history.</p>
                    </div>
                </div>
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Smart Hydroponic Systems</h3>
                        <p>A technology implemetation for Soil Less Farming.</p>
                    </div>
                </div>
                <div className="Portfolio-item">
                    <div className="item">
                        <h3>Novel Trust Recommendation System</h3>
                        <p>Developing a trusted environment in emerging social network platforms.</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}