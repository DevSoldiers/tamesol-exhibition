import { options } from "@/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const withSAuth = async (getServerSidePropsFunc?: Function) => {
    return async (context: any) => {
        const session = await getServerSession(context.req, context.res, options);

        if (!session) {
            redirect(`/api/auth/signin?callbackUrl=${context.resolvedUrl}`);
            return { props: {} };
        }

        if (getServerSidePropsFunc) {
            return getServerSidePropsFunc(context);
        }

        return { props: { session } };
    };
};