export default function Home() {
  return (
    <>
      <main className="section">
        <div className="container maincard">
          <div className="columns">
            <div className="container center-text">
              <h1 className="title">Release Trailer</h1>
              <iframe src="https://www.youtube.com/embed/z_Hm9FBMz1M"/>
            </div>

            <div className="column">
              <h1 className="title">What is Project Plus?</h1>
              <p>Project Plus:</p>
              <div className="content">
                <ul>
                  <li>is a community driven patch for Project M</li>
                  <li>strives to invigorate the Project M experience</li>
                  <li>further balances the roster</li>
                  <li>fixes lingering 3.6 bugs</li>
                  <li>gives the entire UI a fresh coat of paint</li>
                  <li>adjusts movesets to be more fun to play with and against</li>
                  <li>introduces new gameplay mechanics to Project M</li>
                  <li>includes new features such as those created by the Legacy TE team for Legacy TE 2.5.</li>
                </ul>
              </div>
            </div>

            <div className="column" style={{display: 'flex', flexDirection: "row-reverse"}}>
              <img src="images/Falco.png" alt="Translucent Falco" className="magic"/>
            </div>
          </div>
        </div>
      </main>

      {/* <main>
        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main> */}

      <footer>
      </footer>

      <style jsx>{`
        .magic {
          opacity: 0.7;
          transition: all 0.3s ease;
        
          max-height: 400px;
        }
        
        @media screen and (max-width: 768px) {
          .magic {
            max-height: 300px;
          }
        }
        
        .magic:hover {
          opacity: 1.0;
        }

        .center-text{
            text-align: center;
            width: 100%;
        }

        .columns{
            flex-wrap: wrap;
        }

        iframe{
            width: 560px;
            height: 316px;
            margin-bottom: 26px;
        }
      `}</style>

      <style jsx global>{`

      `}</style>
    </>
  )
}