import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelctedFriend] = useState(null);

  // ** Handlers
  const handleShowAddFriend = () => {
    setShowAddFriend((prev) => !prev);
  };

  const handleAddFriend = (friend) => {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelctedFriend(friend);
  };

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-10 text-stone-800 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-600/20">
            🍽️
          </div>

          <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
            Eat <span className="text-emerald-600">&</span> Split
          </h1>

          <p className="mt-3 text-sm leading-6 text-stone-500 sm:text-base">
            Good food is better when you split it fairly.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8">
          {/* Friends Sidebar */}
          <section className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-stone-900">
                  Your Friends
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  Keep track of your shared bills.
                </p>
              </div>

              <span className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-emerald-50 px-2 text-sm font-bold text-emerald-700">
                3
              </span>
            </div>

            <FriendsList friends={friends} onSelection={handleSelectedFriend} />

            {showAddFriend && (
              <div className="mt-5">
                <FormAddFriend onAddFriedns={handleAddFriend} />
              </div>
            )}

            <div className="mt-5">
              <Button onClick={handleShowAddFriend}>
                {showAddFriend ? "Close" : "Add Friend"}
              </Button>
            </div>
          </section>

          {/* Split Bill */}
          <section>
            {selectedFriend && (
              <FormSplitBill selectedFriend={selectedFriend} />
            )}
          </section>
        </div>

        <footer className="mt-10 text-center text-xs text-stone-400">
          Made for good times and fair splits.
        </footer>
      </div>
    </main>
  );
}

export default App;
