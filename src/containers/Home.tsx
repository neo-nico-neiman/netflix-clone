import HeroImage from "../components/HeroImage";
import { Categories } from "../models/categories.enum";
import { Movie } from "../models/movies.model";
import CategoryRow from "../components/CategoryRow";
import {
	selectCategoryAction,
	selectCategoryComedy,
	selectCategoryHorror,
	selectCategoryRomance,
} from "../state/moviesSlice";
import store from "../state/store";

const Home = () => {
	const moviesListAction: Movie[] = selectCategoryAction(store.getState());
	const moviesListComedy: Movie[] = selectCategoryComedy(store.getState());
	const moviesListHorror: Movie[] = selectCategoryHorror(store.getState());
	const moviesListRomance: Movie[] = selectCategoryRomance(store.getState());

	return (
		<>
			<HeroImage movie={moviesListAction[7]} />
			<div>
				<CategoryRow
					moviesList={moviesListAction}
					category={Categories.ACTION}
				/>
				<CategoryRow
					moviesList={moviesListComedy}
					category={Categories.COMEDY}
				/>
				<CategoryRow
					moviesList={moviesListHorror}
					category={Categories.HORROR}
				/>
				<CategoryRow
					moviesList={moviesListRomance}
					category={Categories.ROMANCE}
				/>
			</div>
		</>
	);
};

export { Home };
