import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, doc, getDoc, getDocs, QuerySnapshot } from "firebase/firestore";
//export const fire = getFirestore(app) inside firebase setting
import { firestore } from "../../../fire";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      // since we are using fakeBaseQuery we use queryFn
      async queryFn(obj: any) {
        try {
          // posts is the collection name
          await addDoc(collection(firestore, "posts"), obj);

          return { data: "successfully added" };
        } catch (error) {
          return { error };
        }
      },
      // providesTags: ["Post"],
    }),

    //***************SINGLE ITEM FETCHING*************** */
    fetchSinglePost: builder.query({
      async queryFn(id) {
        try {
          const docRef = doc(firestore, "posts", id);
          const snapshot = await getDoc(docRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
  }),
});

export const { useLazyFetchPostsQuery, useFetchSinglePostQuery } = postsApi;
