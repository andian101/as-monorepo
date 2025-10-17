'use client';

import { useState } from 'react';
import { searchTrials } from '@/app/actions/searchTrials';

export const TrialSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const data = await searchTrials(searchTerm);
    console.log('Search Results:', data);
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <div className="control">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search trials..."
              style={{ fontSize: 18}}
            />
          </div>
          <div className="control">
            <button type="submit" className="button">
              Search
            </button>
          </div>
        </div>
      </form>

      {results.length > 0 && (<p>Found {results.length} result{results.length !== 1 ? 's' : ''} to be viewed in the console.</p>)}


      {/* =====UNCOMMENT FOR RESULTS TO BE LISTED===== */}

      {/* {results.length > 0 && (
        <div>
          {results.map((trial) => (
            <article key={trial.slug}>
              <a href={`/trial-finder/${trial.slug}`}>
                <div>
                  <div>
                    <h5>
                      <div>{trial.trialTitle}</div>
                      <div>
                        {trial.trialAcronym && `(${trial.trialAcronym})`}
                      </div>
                    </h5>
                  </div>

                  <div>
                    <section>
                      <div>
                        <p><strong>Status:</strong> {trial.status}</p>
                        <p><strong>Phase:</strong> {trial.phase}</p>
                        <p><strong>Types:</strong> {trial.types}</p>
                      </div>

                      <div>View trial</div>
                    </section>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      )} */}
    </div>
  );
};