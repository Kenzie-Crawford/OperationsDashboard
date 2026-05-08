import { TradeTable } from "./TradeTable";


function FilterBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSeverity, setFilterSeverity] = useState("");
    const [filterStatus, setFilterStatus] = useState("");


    useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const data = await fetchMockTrades();
                    setTrades(data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchData();
        }, []);
}