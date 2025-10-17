'use server';

import { getClient } from '@/graphQl/apollo-client';
import { SEARCH_TRIALS } from '@/graphQl/query';

export async function searchTrials(searchTerm) {
    const client = getClient();
    const { data } = await client.query({
        query: SEARCH_TRIALS,
        variables: { searchTerm }
    });

    console.log('Search Results:', data);
    return data?.trialCollection?.items || [];
}