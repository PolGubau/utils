import type { Data } from "~/assets/data.types";
type DetailsPageProps = {
	data: Data["utils"][number];
};
export const DetailsPage = (props: DetailsPageProps) => {
	return <div>{JSON.stringify(props.data)}</div>;
};
