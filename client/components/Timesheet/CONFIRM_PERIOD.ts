
import gql from 'graphql-tag';

/**
 * @ignore
 */
export default gql`
    mutation($entries: [TimeEntryInput!], $startDateTime: String!, $endDateTime: String!) {
        result: confirmPeriod (entries: $entries, startDateTime: $startDateTime, endDateTime: $endDateTime) {
            success
	        error {
                message
            }
        }
    }
`;
