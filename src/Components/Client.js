import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

const getEvents = async () => {
    const { data, error } = await supabase
        .from('events')
        .select('*')
    if (error) {
        console.log(error);
    }
    return data;
}

const getEventDetail = async (id) => {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    return data;
}

const createEvent = async ({name, description, street, city, state, zip, date, time, email, password}) => {
    const { data, error } = await supabase
        .from('events')
        .insert([
            {
                name,
                description,
                street,
                city,
                state,
                zip,
                date,
                time,
                email,
                password
            }
        ])
    if (error) {
        console.log(error);
    }
    return data;
}

const editEvent = async ({id, name, description, street, city, state, zip, date, time}) => {
    const { data, error } = await supabase
        .from('events')
        .update([
            {
                name,
                description,
                street,
                city,
                state,
                zip,
                date,
                time,
            }
        ])
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    return data;
}

const deleteEvent = async (id) => {
    const { data, error } = await supabase
        .from('events')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    return data;
}

const upvoteEvent = async (id) => {
    console.log(id);
    const fetchPopularity = async () => {
        const { data, error } = await supabase
            .from('events')
            .select('popularity')
            .eq('id', id)
        if (error) {
            console.log(error);
        }
        console.log(data);
        return data;
    }

    const popularityData = await fetchPopularity()
    const newPopularity = popularityData[0].popularity + 1;

    const { data, error } = await supabase
        .from('events')
        .update(
            { popularity: newPopularity}
        )
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    return data;
}

const getComments = async (event_id) => {
    const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('event_id', event_id)
    if (error) {
        console.log(error);
    }
    return data;
}

const createComment = async ({event_id, name, commentText}) => {
    const { data, error } = await supabase
        .from('comments')
        .insert([
            {
                event_id: event_id,
                name,
                commentText
            }
        ])
    if (error) {
        console.log(error);
    }
    return data;
} 

const deleteComment = async (id) => {
    const { data, error } = await supabase
        .from('comments')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error);
    }
    return data;
}

export { getEvents, getEventDetail, createEvent, editEvent, deleteEvent, getComments, createComment, deleteComment, upvoteEvent};
